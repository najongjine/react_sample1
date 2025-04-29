/**
 * 컴포넌트 안에 로직을 모두 작성하면 코드가 복잡해지고 유지보수가 어려워지기 때문에, 이러한 로직을 별도의 파일로 분리하여 관리하는 것이 좋습니다. 이때 사용하는 것이 바로 **커스텀 훅(Custom Hook)**입니다.
로직 분리의 목적: 컴포넌트의 복잡성을 줄이고, 코드의 재사용성과 유지보수성을 높이기 위함입니다.

커스텀 훅의 역할: 공통 로직을 추출하여 여러 컴포넌트에서 재사용할 수 있게 해줍니다.

프로젝트 구조화: 커스텀 훅을 별도의 디렉토리에 모아 관리하면 코드가 더욱 체계적이 됩니다.
 */

import { useState } from "react";

export function useLoginForm(initialValues: { username: string; password: string }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // 실시간 유효성 검사
    if (name === "username" && value.trim() === "") {
      setErrors((prev) => ({ ...prev, username: "사용자명을 입력하세요." }));
    } else if (name === "password" && value.trim() === "") {
      setErrors((prev) => ({ ...prev, password: "비밀번호를 입력하세요." }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: { username?: string; password?: string } = {};
    if (!values?.username?.trim()) {
      newErrors.username = "사용자명을 입력하세요.";
    }
    if (!values?.password?.trim()) {
      newErrors.password = "비밀번호를 입력하세요.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    values,
    errors,
    handleChange,
    validate,
  };
}
