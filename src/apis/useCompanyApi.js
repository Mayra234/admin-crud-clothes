const useCompanyApi = () => {
  const baseUrl = LOCAL_BASE_URL;
  //Enlistar
  const list = async () => {
    const response = await fetch(`${baseUrl}/companys`, { method: 'GET' });
    return response.json();
  };
  //crear (POST)
  const create = async (data) => {
    const response = await fetch(`${baseUrl}/companys`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  //Leer (GET)
  const read = async (id) => {
    const response = await fetch(`${baseUrl}/companys/${id}`, {
      method: 'GET',
    });
    return response.json();
  };
  // Actualizar (PUT)
  const update = async (id, data) => {
    const response = await fetch(`${baseUrl}/companys/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  //Eliminar (DELETE)
  const remove = async (id) => {
    const response = await fetch(`${baseUrl}/companys/${id}`, {
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
