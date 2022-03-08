import widgets from "./widgets";

test("calls queries.widgets and returns the result", async () => {
  const mockResponse = "MOCK_RESPONSE";
  const mockQuery = jest.fn().mockName("queries.widgets").mockReturnValueOnce(Promise.resolve(mockResponse));

  const result = await widgets(null, { /* TODO */ }, {
    queries: { widgets: mockQuery },
    userId: "123"
  });

  expect(result).toEqual(mockResponse);
  expect(mockQuery).toHaveBeenCalled();
});