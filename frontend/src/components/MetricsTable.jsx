import  { useEffect, useState } from "react";
import axios from "axios";

const MetricsTable = () => {
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const res = await axios.get("/api/metrics");
                setMetrics(res.data);
            } catch (err) {
                console.error("Error fetching metrics:", err);
            }
        };

        fetchMetrics();
    }, []);

    return (
        <div className="overflow-x-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Metrics</h2>
            <table className="min-w-full border bg-white shadow-md">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="px-4 py-2">IP Address</th>
                        <th className="px-4 py-2">Reason</th>
                        <th className="px-4 py-2">Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {metrics.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center p-4">
                                No data available
                            </td>
                        </tr>
                    ) : (
                        metrics.map((metric, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                            >
                                <td className="border px-4 py-2">{metric.ip}</td>
                                <td className="border px-4 py-2">{metric.reason}</td>
                                <td className="border px-4 py-2">
                                    {new Date(metric.timestamp).toLocaleString()}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MetricsTable;
