const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// User will replace this with their actual key
export const API_KEY = 'AIzaSyBLABJ_ByJHJdvkReHgTfsaFfojk01H1AM';

export const searchVideos = async (query) => {
    if (!API_KEY || API_KEY === 'YOUR_YOUTUBE_API_KEY') {
        console.warn('YouTube API Key is missing. Please update src/services/youtube.js');
        return [];
    }

    try {
        const response = await fetch(`${BASE_URL}/search?part=snippet&maxResults=24&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message || 'Failed to fetch videos');
        }

        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching videos:', error);
        throw error;
    }
};

export const getPopularVideos = async () => {
    if (!API_KEY || API_KEY === 'YOUR_YOUTUBE_API_KEY') {
        console.warn('YouTube API Key is missing. Please update src/services/youtube.js');
        return [];
    }

    try {
        const response = await fetch(`${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&maxResults=24&regionCode=KR&key=${API_KEY}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message || 'Failed to fetch popular videos');
        }

        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching popular videos:', error);
        throw error;
    }
};


export const getVideoDetails = async (videoId) => {
    if (!API_KEY || API_KEY === 'YOUR_YOUTUBE_API_KEY') return null;

    try {
        const response = await fetch(`${BASE_URL}/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`);

        if (!response.ok) throw new Error('Failed to fetch video details');

        const data = await response.json();
        return data.items[0];
    } catch (error) {
        console.error('Error fetching video details:', error);
        return null;
    }
};
