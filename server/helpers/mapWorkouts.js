module.exports = (data) => ({
    id: data._id,
    startedAt: data.started_at,
    types: data.types,
    durationMinutes: data.duration_minutes,
});
