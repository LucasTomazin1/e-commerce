export const fetchProducts = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log("fetchProducts", data)
      return data.results
    } catch (error) {
      console.log('Error fetching products', error)
      return []  // Retornar uma lista vazia em caso de erro para evitar que a aplicação quebre
    }
  }
  
  export const fetchProduct = async (id: string) => {
    try {
      const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log("fetchProduct", data)
      return data
    } catch (error) {
      console.log('Error fetching product', error)
      return null  // Retornar null em caso de erro para lidar adequadamente com a falta de dados
    }
  }
  
