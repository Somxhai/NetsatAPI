module.exports = {
  getSyllabusById: (id, netsatData) => {
    for (const data of netsatData) {
      if (data.syllabus_id == id) return data;
    }
    return {};
  },
};
