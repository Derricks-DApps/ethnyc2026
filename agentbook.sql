SELECT
  from_address,
  COUNT(*) AS tx_count
FROM `bigquery-public-data.goog_blockchain_ethereum_mainnet_us.transactions`
GROUP BY from_address
ORDER BY tx_count DESC
LIMIT 100;
