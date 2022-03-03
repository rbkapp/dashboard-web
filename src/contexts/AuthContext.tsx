import {
    createContext,
    useState,
    useContext,
    useEffect,
    useCallback,
  } from "react";
  //import { useNavigate } from "react-router-dom";
  // import { setCookie, destroyCookie, parseCookies } from "nookies";
  //import { authClient } from "services/authClient";
  // import { HeadersDefaults } from "axios";
  
  export type User = {
    id: number;
    email: string;
    name: string;
    last_name: string;
    avatar: string;
    cell_phone: string;
    birthdate: string;
    document: string;
    gender: string;
    type_document: string;
    type_user: number;
  };
  
  type SignInCredentials = {
    email: string;
    password: string;
  };
  
  type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    hydratationUser(): void;
    user: User | undefined;
    isAuthenticated: boolean;
    hasOrganizer: boolean;
  };
  
  const AuthContext = createContext<AuthContextData>({} as AuthContextData);
  
  export const AuthProvider: React.FC = ({ children }) => {
    //let navigate = useNavigate();
  
    const [user, setUser] = useState<User | undefined>();
  
    const signOut = useCallback(() => {
      // destroyCookie(undefined, "Eventx.token");
      // destroyCookie(undefined, "Eventx.userId");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
  
      setUser(undefined);
      //navigate("/");
    }, []);
  
    useEffect(() => {
      async function getUser() {
        // const { "Eventx.token": token } = parseCookies();
        // const { "Eventx.userId": userId } = parseCookies();
  
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
  
        if (token) {
          try {
            /*const { data } = await authClient.get(`/users/show/${userId}`);
  
            console.log("o user", data);
  
            if (data) {
              setUser({
                id: data.id,
                name: data.name,
                last_name: data.last_name,
                avatar: data.avatar,
                cell_phone: data.cell_phone,
                email: data.email,
                birthdate: data.birthdate,
                document: data.document,
                gender: data.gender,
                type_document: data.type_document,
                type_user: data.type_user,
              });
            }*/
          } catch (err: any) {
            console.log("o error", err);
            signOut();
          }
        }
      }
  
      //getUser();
    }, [signOut]);
  
    async function hydratationUser() {
      // const { "Eventx.token": token } = parseCookies();
      // const { "Eventx.userId": userId } = parseCookies();
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
  
      if (token) {
        try {/*
          const { data } = await authClient.get(`/users/show/${userId}`);
  
          console.log("o user", data);
  
          if (data) {
            setUser({
              id: data.id,
              name: data.name,
              last_name: data.last_name,
              avatar: data.avatar,
              cell_phone: data.cell_phone,
              email: data.email,
              birthdate: data.birthdate,
              document: data.document,
              gender: data.gender,
              type_document: data.type_document,
              type_user: data.type_user,
            });
          }*/
        } catch (err) {
          console.log("o error", err);
          signOut();
        }
      }
    }
  
    async function signIn({ email, password }: SignInCredentials) {
      alert('email: '+email);
        localStorage.setItem("userId", 's5glkfjgçldkjgçsds');
  
      localStorage.setItem("token", 'qwfs5s6d46s.d4');
  
      setUser({
        id: 1,
        name: 'user.name',
        last_name: 'user.last_name',
        email: 'user.email',
        avatar: 'user.avatar',
        cell_phone: 'user.cell_phone',
        birthdate: 'user.birthdate',
        document: 'user.document',
        gender: 'user.gender',
        type_document: 'user.type_document',
        type_user: 1,
      });
    }

    const checkUser = () => {
        const userId = localStorage.getItem("userId");

        return userId == '' ? false : true;
    }
  
    return (
      <AuthContext.Provider
        value={{
          signIn,
          signOut,
          user,
          isAuthenticated: checkUser(),
          hydratationUser,
          hasOrganizer: user?.type_user === 1,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error(`useAuth must be used within a AuthProvider`);
    }
  
    return context;
  }
  