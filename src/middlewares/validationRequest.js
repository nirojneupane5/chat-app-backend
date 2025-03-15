export const validateRequest = (schema) => (req, res, next) => {
  const validatedData = schema.safeParse(req.body);
  if (!validatedData.success) {
    return res.status(400).json({
      errors: validatedData.error.errors.map((error) => ({
        field: error.path[0],
        message: error.message,
      })),
    });
  }
  req.validatedData = validatedData.data;
  next();
};
