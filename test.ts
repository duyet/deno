import { assertEquals } from "https://deno.land/std@0.107.0/testing/asserts.ts";

Deno.test("should pass", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});