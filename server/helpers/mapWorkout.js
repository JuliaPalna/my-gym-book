module.exports = (data) => ({
    id: data._id,
    description: data.description,
    durationMinutes: data.duration_minutes,
    startedAt: data.started_at,
    types: data.types,
});
