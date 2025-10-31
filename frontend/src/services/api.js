import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function getCompanyInfo(query) {
    // query: URL, название, ИНН или адрес
    const res = await axios.post(`${API_BASE}/api/v1/organizations/search-and-import`, {
        query
    });
    return res.data;
}
