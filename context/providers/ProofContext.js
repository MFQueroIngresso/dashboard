import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../../src/libs/api";

const ProofContext = createContext();
export default ProofContext;

export const ProofContextProvider = ({ children }) => {
  const [proofs, setProofs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProofs = async () => {
    try {
      const { data } = await api.get("sangrias_comprovantes");
      setProofs(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProofs();
  }, []);

  return (
    <ProofContext.Provider
      value={{
        proofs,
        loading,
      }}
    >
      {children}
    </ProofContext.Provider>
  );
};

export const useProofContext = () => {
  return useContext(ProofContext);
};
