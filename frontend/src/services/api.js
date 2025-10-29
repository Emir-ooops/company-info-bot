import axios from "axios";
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function getCompanyInfo(site, user) {
    const res = await axios.post(`${API_BASE}/api/company-info`, { site, user });
    return res.data;
}
