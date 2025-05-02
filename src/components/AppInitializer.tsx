// 예시: 앱 초기화 시 사용자 정보 동기화
import { useEffect } from "react";
import useUserStore from "../store/AuthStore";
import useAuthStore from "../store/AuthStore";

const AppInitializer: React.FC = () => {
  const { logout } = useAuthStore();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process?.env?.NODE_ENV ?? ""}/auth/current-user`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response?.json();

        if (data?.user) {
          setUser(data.user);
        }
      } catch (error: any) {
        console.error(`!!! AppInitializer fetchUser : `, error?.message ?? "");
        logout();
      }
    };

    fetchUser();
  }, [setUser]);

  return null;
};

export default AppInitializer;
