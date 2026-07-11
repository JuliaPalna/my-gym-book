export function mapperDurationByTypeForPieChart(
    duration: Record<string, number>,
): {
    types: string[];
    duration: number[];
} {
    return {
        types: Object.keys(duration),
        duration: Object.values(duration),
    };
}
