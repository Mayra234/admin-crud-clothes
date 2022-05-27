const useMaterialApi = () => {
  const baseUrl = LOCAL_BASE_URL;
  //Enlistar
  const list = async () => {
    const response = await fetch(`${baseURL}/materials`, { method: 'GET' });
    return response.json();
  };
  const create = async (data) => {
    const response = await fetch(`${baseUrl}/materials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  //Leer (GET)
  const read = async (id) => {
    const response = await fetch(`${baseUrl}/materials/${id}`, {
      method: 'GET',
    });
    return response.json();
  };
  // Actualizar (PUT)
  const update = async (id, data) => {
    const response = await fetch(`${baseUrl}/materials/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  //Eliminar (DELETE)
  const remove = async (id) => {
    const response = await fetch(`${baseUrl}/materials/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  };

  return {
    list,
    create,
    read,
    update,
    remove,
  };
};
