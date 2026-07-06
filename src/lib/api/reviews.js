const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://ruxbux.com/api"
).replace(/\/$/, "");

function buildApiUrl(path, params = {}) {
  const url = new URL(`${API_BASE_URL}${path}`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}

function getFirstAttachmentUrl(attachments = []) {
  const attachment = Array.isArray(attachments) ? attachments[0] : null;

  return attachment?.image_url || attachment?.image || null;
}

export function mapReviewFromApi(review, productName = "StackSmart Wardrobe Organizer") {
  if (!review) {
    return null;
  }

  return {
    id: review.id,
    name: review.name,
    rating: Number(review.stars),
    title: "",
    comment: review.text,
    verified: true,
    productName,
    image: getFirstAttachmentUrl(review.attachments),
  };
}

export function mapSummaryFromApi(summary) {
  const totalReviews = Number(summary?.total) || 0;
  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  Object.entries(summary?.stars || {}).forEach(([rating, count]) => {
    ratingCounts[Number(rating)] = Number(count) || 0;
  });

  const ratingPercentages = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  Object.keys(ratingCounts).forEach((rating) => {
    ratingPercentages[rating] =
      totalReviews > 0 ? Math.round((ratingCounts[rating] / totalReviews) * 100) : 0;
  });

  return {
    averageRating: Number(summary?.average_rating) || 0,
    totalReviews,
    ratingCounts,
    ratingPercentages,
  };
}

export async function fetchReviews({ page = 1, pageSize = 50, productName } = {}) {
  const response = await fetch(
    buildApiUrl("/reviews/", {
      page,
      page_size: pageSize,
    }),
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Unable to load reviews.");
  }

  const data = await response.json();
  const results = Array.isArray(data?.results) ? data.results : Array.isArray(data) ? data : [];

  return {
    count: Number(data?.count) || results.length,
    next: data?.next || null,
    previous: data?.previous || null,
    reviews: results
      .map((review) => mapReviewFromApi(review, productName))
      .filter(Boolean),
  };
}

export async function fetchReviewSummary() {
  const response = await fetch(buildApiUrl("/reviews/summary/"), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load review summary.");
  }

  return mapSummaryFromApi(await response.json());
}

export async function createReview(reviewPayload) {
  const formData = new FormData();

  formData.append("stars", String(reviewPayload.rating));
  formData.append("name", reviewPayload.name);
  formData.append("email", reviewPayload.email);
  formData.append("text", reviewPayload.comment);

  const images = Array.isArray(reviewPayload.images) ? reviewPayload.images : [];
  images.forEach((image) => {
    if (image instanceof File) {
      formData.append("images", image);
    }
  });

  const response = await fetch(buildApiUrl("/reviews/create/"), {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return mapReviewFromApi(data, reviewPayload.productName);
}
