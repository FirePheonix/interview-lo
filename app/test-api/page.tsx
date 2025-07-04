"use client";

import { useState } from "react";

export default function TestVAPIEndpoint() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testEndpoint = async () => {
    setLoading(true);
    try {
      const testData = {
        type: "Technical",
        role: "Frontend Developer",
        level: "Mid",
        techstack: "React,TypeScript,Next.js",
        amount: "5",
        userid: "test-user-123",
      };

      console.log("Sending test data:", testData);

      const response = await fetch("/api/vapi/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      setResult(data);
    } catch (error) {
      console.error("Test error:", error);
      setResult({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  };

  const testEmptyRequest = async () => {
    setLoading(true);
    try {
      console.log("Sending empty request to simulate VAPI issue");

      const response = await fetch("/api/vapi/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      setResult(data);
    } catch (error) {
      console.error("Test error:", error);
      setResult({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Test VAPI Generate Endpoint</h1>

      <div className="space-y-4">
        <button
          onClick={testEndpoint}
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Testing..." : "Test with Valid Data"}
        </button>

        <button
          onClick={testEmptyRequest}
          disabled={loading}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 disabled:opacity-50"
        >
          {loading
            ? "Testing..."
            : "Test with Empty Data (Simulate VAPI Issue)"}
        </button>
      </div>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Result:</h2>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">
          Debug Instructions:
        </h3>
        <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-700">
          <li>Open browser DevTools (F12)</li>
          <li>Go to Console tab</li>
          <li>Click "Test with Valid Data" to see successful API call</li>
          <li>Click "Test with Empty Data" to simulate your VAPI issue</li>
          <li>Check console logs for detailed debugging info</li>
          <li>Check Network tab to see exact request/response</li>
        </ol>
      </div>
    </div>
  );
}
