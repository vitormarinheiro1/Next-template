import Layout from "@/components/templates/Layout"
import useAppData from "@/data/hook/useAppData"

export default function Notificacoes() {
  const { alternarTema } = useAppData()

  return (
    <Layout titulo="Notificações" subtitulo="Aqui você irá gerenciar as suas notificações">
    </Layout>
  )
}
