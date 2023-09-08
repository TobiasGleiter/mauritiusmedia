import { Session } from 'next-auth';

export function hasRequiredPermissions(
  role: string,
  requiredPermissions: string[]
): boolean {
  // Check if the user's role matches any of the required roles
  return requiredPermissions.includes(role);
}

export function useRole(session: Session | null): string {
  if (session && session.user && session.user.role) {
    return session.user.role;
  }
  return 'guest';
}

export function hasRequiredPermissionsClient(
  role: string,
  requiredPermissions: string[]
): boolean {
  // Check if the user's role matches any of the required roles
  return requiredPermissions.includes(role);
}
