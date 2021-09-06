const json = JSON.stringify({
  message: 'Hello from /api'
})

const resp = new Response(json, {
  headers: {
    "content-type": "application/json",
  },
});

export default resp;
