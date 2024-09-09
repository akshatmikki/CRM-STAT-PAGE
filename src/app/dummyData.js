// src/utils/dummyData.js

export const getStats = async () => {
    // Simulated async function to fetch data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalSales: 500,
          newCustomers: 30,
          salesOverTime: [100, 200, 300, 400, 500],
        });
      }, 1000);
    });
  };
  