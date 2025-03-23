import database from "infra/database";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  await response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: await getDbVersionValue(database),
        max_connections: await getDbMaxConnectionsValue(database),
        open_connections: await getDbOpenConnectionsValue(database),
      },
    },
  });
}

const getDbVersionValue = async (db) => {
  const databaseVersionResult = await db.query("SHOW server_version;");
  return databaseVersionResult.rows[0].server_version;
};

const getDbMaxConnectionsValue = async (db) => {
  const databaseMaxConnectionsResult = await db.query(
    "SHOW max_connections",
  );
  return parseInt(databaseMaxConnectionsResult.rows[0].max_connections);
};

const getDbOpenConnectionsValue = async (db) => {
  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenConnectionsResult = await db.query({
    text: "SELECT count(*)::int from pg_stat_activity where datname = $1;",
    values: [databaseName],
  });
  return databaseOpenConnectionsResult.rows[0].count;
};

export default status;
