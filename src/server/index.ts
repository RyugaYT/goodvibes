import type { GoodVibes } from './GoodVibes'
export { GoodVibes } from './GoodVibes'

interface Env {
  GOODVIBES: DurableObjectNamespace<GoodVibes>
}

const worker = {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    const url = new URL(request.url)
    const path = url.pathname

    if (path === '/websocket') {
      const id = env.GOODVIBES.idFromName('goodvibes')
      const stub = env.GOODVIBES.get(id)
      return stub.fetch(request)
    }

    // Add CORS headers to all responses
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    return new Response('GoodVibes says howdy. 🤠 All hat, no cattle.', {
      status: 404,
      headers: corsHeaders,
    })
  },
}

export default worker
