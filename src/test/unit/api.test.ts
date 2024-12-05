import axios from 'axios';

import { fetchData } from '@/services/api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('should return null when the API request fails', async () => {
  mockedAxios.create.mockReturnValueOnce({
    get: jest.fn().mockRejectedValueOnce(new Error('Network Error')),
  } as any);

  const result = await fetchData();

  expect(result).toBeNull();
});
