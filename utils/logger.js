

export default async function (head,body) {
  try {
    const { data } = await useFetch("/api/log?head="+head, {
      method: "POST",
      body: body,
    });
    
    console.log(data.value, "<--res@log-->");
  } catch (error) {
    console.log( { success: false, message: error.message })
  }
    
  }