export const fetchBikes = async () => {
  const response = await fetch(
    "https://challenges.brainster.tech/ajax_data/data.json"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  if (!Array.isArray(data.products)) {
    throw new Error("Invalid response format: products is not an array");
  }
  return data.products;
};
