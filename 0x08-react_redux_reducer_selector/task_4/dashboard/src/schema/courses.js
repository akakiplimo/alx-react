import { normalize, schema } from "normalizr";

// Define Courses Schema
const courses = new schema.Entity("courses");

const coursesNormalizer = (data) => {
    const normalizedData = normalize(data, [courses]);
    return normalizedData.entities.courses;
}

export default coursesNormalizer;