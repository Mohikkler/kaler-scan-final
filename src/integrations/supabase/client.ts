// Supabase removed: export a minimal stub to avoid import errors.
export const supabase = {
  auth: {
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    getSession: async () => ({ data: { session: null } }),
    signOut: async () => ({ error: null })
  },
};