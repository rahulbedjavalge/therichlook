describe('GET /health', () => {
  it('returns status OK', async () => {
    const res = await fetch('http://localhost:5000/health');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty('status', 'OK');
  });
});
