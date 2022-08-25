const useClotheApi = () => {
  const baseUrl = LOCAL_BASE_URL;

  const list = async () => {
    const response = await fetch(`${baseUrl}/clothes`, { method: 'GET' });
    return response.json();
  };

  const create = async (data) => {
    const response = await fetch(`${baseUrl}/clothes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const read = async (id) => {
    const response = await fetch(`${baseUrl}/clothes/${id}`, {
      method: 'GET',
    });
    return response.json();
  };

  const update = async (id, data) => {
    const response = await fetch(`${baseUrl}/clothes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const remove = async (id) => {
    const response = await fetch(`${baseUrl}/clothes/${id}`, {
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
