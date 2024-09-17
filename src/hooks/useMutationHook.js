import { useMutation } from '@tanstack/react-query';

export const useMutationHooks = (mutationFn) => {
    const mutation = useMutation({
        mutationFn: mutationFn,
    });
    return mutation;
};
