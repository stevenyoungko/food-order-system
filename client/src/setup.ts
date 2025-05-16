import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('uuid', () => ({
  v4: () => 'mocked-uuid',
}));
