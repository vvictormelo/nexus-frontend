import { useState } from "react";
import { UserPlus, Search, Mail, Phone, MoreVertical, Edit, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function UsersManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Carlos Silva",
      email: "carlos@empresa.com",
      phone: "(11) 98765-4321",
      role: "Administrador",
      status: "active",
      lastAccess: "Agora",
    },
    {
      id: 2,
      name: "Ana Costa",
      email: "ana@empresa.com",
      phone: "(11) 98765-1234",
      role: "Editor",
      status: "active",
      lastAccess: "5 min atrás",
    },
    {
      id: 3,
      name: "João Santos",
      email: "joao@empresa.com",
      phone: "(11) 98765-5678",
      role: "Visualizador",
      status: "active",
      lastAccess: "1h atrás",
    },
    {
      id: 4,
      name: "Maria Oliveira",
      email: "maria@empresa.com",
      phone: "(11) 98765-8765",
      role: "Editor",
      status: "inactive",
      lastAccess: "2 dias atrás",
    },
    {
      id: 5,
      name: "Pedro Almeida",
      email: "pedro@empresa.com",
      phone: "(11) 98765-4567",
      role: "Visualizador",
      status: "active",
      lastAccess: "3h atrás",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Administrador":
        return "bg-purple-100 text-purple-700";
      case "Editor":
        return "bg-blue-100 text-blue-700";
      case "Visualizador":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleEdit = (userId: number) => {
    alert(`Editar usuário ID: ${userId}`);
  };

  const handleDelete = (userId: number) => {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
      alert(`Usuário ID ${userId} excluído`);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.875rem' }}>
            Gerenciar Usuários
          </h1>
          <p className="text-muted-foreground">
            Adicione, edite ou remova usuários da plataforma
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary">
          <UserPlus className="w-5 h-5 mr-2" />
          Adicionar Usuário
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar por nome ou e-mail..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Users Table */}
      <div className="bg-card rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Usuário</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    Nenhum usuário encontrado
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                            {getInitials(user.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p>{user.name}</p>
                          <p className="text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <span>{user.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status === "active" ? "Ativo" : "Inativo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.lastAccess}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEdit(user.id)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(user.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-muted-foreground mb-2">Total de Usuários</p>
          <p style={{ fontSize: '2rem' }}>{users.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-muted-foreground mb-2">Usuários Ativos</p>
          <p style={{ fontSize: '2rem' }}>
            {users.filter((u) => u.status === "active").length}
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-muted-foreground mb-2">Administradores</p>
          <p style={{ fontSize: '2rem' }}>
            {users.filter((u) => u.role === "Administrador").length}
          </p>
        </div>
      </div>
    </div>
  );
}
