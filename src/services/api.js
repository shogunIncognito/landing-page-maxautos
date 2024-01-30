import axios from 'axios'

const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY

export const getCars = async () => {
  return await axios.get('https://maxapi.onrender.com/api/cars')
}

export const askAi = async (cars, messages) => {
  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `Tienes esta lista de vehículos disponibles: ${JSON.stringify(cars)}. eres un asistente que va a responder las preguntas del cliente pero sola y exclusivamente sobre los vehículos disponibles.Si el cliente pregunta sobre un vehículo que no se encuentra en el catalogo, responde que no poseemos ese modelo, No le hables al cliente sobre vehículos que no se encuentran en la lista de vehículos, Si el cliente pregunta algo que no tiene que ver con los vehículos, puedes responder con un mensaje genérico como "Solamente puedo contestar preguntas acerca de los vehículos" o "Lo siento no puedo ayudarte con eso"`
      },
      {
        role: 'assistant',
        content: 'Hola, ¿en qué puedo ayudarte?'
      },
      ...messages
    ],
    max_tokens: 500,
    temperature: 0.3
  }, {
    headers: {
      Authorization: `Bearer ${OPENAI_KEY}`
    }
  })

  return response.data.choices[0].message
}
