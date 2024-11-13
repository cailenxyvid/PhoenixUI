import type { LayoutServerLoad } from "./$types"
 
export const load: LayoutServerLoad = async (event) => {
  console.log('checking session')
  let session = null;
  try {
    session = await event.locals.auth()
  console.log('session', session)
  } catch (e:any) {
    console.log('session error', e.message ?? e)
  }
  // const session = {}
 
  return {
    session,
  }
}