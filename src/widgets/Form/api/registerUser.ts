import { FormData } from 'src/widgets/Form';

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    userId: string;
    phone: string;
    token: string;
    refreshToken: string;
    createdAt: string;
  };
  errors?: Record<string, string[]>;
}

export interface User {
  userId: string;
  phone: string;
  password: string;
  isAge: boolean;
  isBonusAccepted: boolean;
  token: string;
  refreshToken: string;
  createdAt: string;
  lastLoginAt?: string;
}

class FakeDatabase {
  private users: Map<string, User> = new Map();
  private phoneIndex: Map<string, string> = new Map(); // phone -> userId

  addUser(user: User): void {
    this.users.set(user.userId, user);
    this.phoneIndex.set(user.phone, user.userId);
  }

  isPhoneExists(phone: string): boolean {
    return this.phoneIndex.has(phone);
  }

  getAllUsers(): User[] {
    return Array.from(this.users.values());
  }
}

const fakeDB = new FakeDatabase();

const generateToken = (): string => 'fake-jwt-token-' + Math.random().toString(36).substr(2, 16);
const generateRefreshToken = (): string =>
  'fake-refresh-token-' + Math.random().toString(36).substr(2, 16);
const generateUserId = (): string => Math.random().toString(36).substr(2, 9);
const getCurrentTimestamp = (): string => new Date().toISOString();

export const registerUser = async (formData: FormData): Promise<AuthResponse> => {
  const delay = Math.random() * 2000 + 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  try {
    if (formData.phone.length < 10) {
      throw new Error('Phone number must be at least 10 characters');
    }

    if (formData.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    if (!formData.isAge) {
      throw new Error('You must be at least 18 years old');
    }

    const normalizedPhone = formData.phone.replace(/\D/g, '');
    console.log('1', normalizedPhone);
    if (fakeDB.isPhoneExists(normalizedPhone)) {
      console.log('2', normalizedPhone);
      return {
        success: false,
        message: 'Registration failed',
        errors: {
          phone: ['Пользователь с таким номером телефона уже существует'],
        },
      };
    }
    console.log(fakeDB);
    const newUser: User = {
      userId: generateUserId(),
      phone: normalizedPhone,
      password: formData.password,
      isAge: formData.isAge,
      isBonusAccepted: formData.isBonusAccepted,
      token: generateToken(),
      refreshToken: generateRefreshToken(),
      createdAt: getCurrentTimestamp(),
    };

    fakeDB.addUser(newUser);

    console.log('New user registered:', {
      userId: newUser.userId,
      phone: newUser.phone,
      totalUsers: fakeDB.getAllUsers().length,
    });

    return {
      success: true,
      message: 'Регистрация прошла успешно!',
      data: {
        userId: newUser.userId,
        phone: newUser.phone,
        token: newUser.token,
        refreshToken: newUser.refreshToken,
        createdAt: newUser.createdAt,
      },
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: 'Произошла ошибка при регистрации',
      errors: {
        system: ['Внутренняя ошибка сервера'],
      },
    };
  }
};
