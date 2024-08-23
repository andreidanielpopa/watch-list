import config from "config";

const API_BASE_URL = config.API_BASE_URL;

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
};

export const fetchPopularTVShows = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/popular-tv-shows`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching popular TV shows:', error);
    return [];
  }
};