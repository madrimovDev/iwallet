import { $api } from '@configs'
import { AuthResponse } from '@models'
import { AxiosResponse } from 'axios'

class AuthService {
	static registration = (
		email: string,
		password: string,
		firstName: string,
		lastName: string
	): Promise<AxiosResponse<AuthResponse>> => {
		return $api.post<AuthResponse>('./registration', {
			email,
			password,
			lastName,
			firstName
		})
	}

	static login = (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
		return $api.post('./login', {
			email,
			password
		})
	}
	
  static async logout(): Promise<void> {
		return $api.post('/logout')
	}
}

export default AuthService
