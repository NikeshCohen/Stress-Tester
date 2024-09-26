const targetUrl = "";

const totalRequests = 1000000;
const batchSize = 1000;

const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36",
];

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const sendRequest = async (requestId) => {
  const randomUserAgent = userAgents[getRandomInt(0, userAgents.length)];

  const method = Math.random() > 0.8 ? "POST" : "GET";
  const headers = {
    "User-Agent": randomUserAgent,
    "X-Test-ID": `${requestId}`,
    "Cache-Control": "no-cache",
  };

  const body =
    method === "POST" ? JSON.stringify({ key: `value-${requestId}` }) : null;

  try {
    const response = await fetch(targetUrl, {
      method,
      headers,
      body,
    });

    console.log(`Request ${requestId} received response: ${response.status}`);
  } catch (error) {
    console.error(`Request ${requestId} failed:`, error);
  }
};

const runBatch = async (startId, batchSize) => {
  const batchPromises = [];

  for (let i = 0; i < batchSize; i++) {
    batchPromises.push(sendRequest(startId + i));
  }

  await Promise.all(batchPromises);
};

const stressTest = async () => {
  let sentRequests = 0;

  while (sentRequests < totalRequests) {
    await runBatch(sentRequests, batchSize);
    sentRequests += batchSize;
    console.log(`${sentRequests} requests sent so far...`);
  }

  console.log("Stress test completed.");
};

stressTest();
