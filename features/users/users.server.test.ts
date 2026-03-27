import pool from "@/lib/db";
import { getAllUsers } from "@/features/users/user.queries";

describe("Users Service - Integration", () => {
  // 1. Clean the slate before each test
  beforeEach(async () => {
    await pool.query("TRUNCATE TABLE users RESTART IDENTITY CASCADE");
  });

  // 2. Close connection when done
  afterAll(async () => {
    await pool.end();
  });

  it("should return all users from the database", async () => {
    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3), ($4, $5, $6)",
      [
        "Dariy",
        "dariy@example.com",
        "hashedpassword1",
        "Alice",
        "alice@example.com",
        "hashedpassword2",
      ],
    );

    const users = await getAllUsers();
    if (!users) {
      throw new Error("No users found");
    }

    expect(users).toHaveLength(2);
    expect(users[0]).toMatchObject({
      name: "Dariy",
      email: "dariy@example.com",
    });
  });

  it("should return an empty array if no users exist", async () => {
    const users = await getAllUsers();
    expect(users).toEqual([]);
  });
});
