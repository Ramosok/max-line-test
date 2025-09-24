import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AuthResponse, registerUser } from 'src/widgets/Form/api/registerUser';
import { FormData } from 'src/widgets/Form';

export const useRegister = (options?: UseMutationOptions<AuthResponse, Error, FormData>) => {
  return useMutation<AuthResponse, Error, FormData>({
    mutationFn: async (formData: FormData) => {
      const response = await registerUser(formData);

      if (!response.success) {
        const errorMessage = response.errors?.phone?.[0] || response.message;
        throw new Error(errorMessage);
      }

      return response;
    },
    ...options,
  });
};
