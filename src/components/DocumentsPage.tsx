import { useState } from "react";
import { Download, Search, FileText, FileSpreadsheet, FileImage, Filter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const documents = [
    {
      id: 1,
      name: "Relatório Anual 2024",
      category: "Relatórios",
      type: "PDF",
      date: "20 Out 2025",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Planilha de Associados",
      category: "Dados",
      type: "XLSX",
      date: "18 Out 2025",
      size: "856 KB",
    },
    {
      id: 3,
      name: "Manual do Usuário",
      category: "Documentação",
      type: "PDF",
      date: "15 Out 2025",
      size: "5.1 MB",
    },
    {
      id: 4,
      name: "Apresentação Institucional",
      category: "Apresentações",
      type: "PPTX",
      date: "10 Out 2025",
      size: "12.3 MB",
    },
    {
      id: 5,
      name: "Ata da Reunião - Setembro",
      category: "Atas",
      type: "DOCX",
      date: "05 Out 2025",
      size: "124 KB",
    },
    {
      id: 6,
      name: "Estatuto Social",
      category: "Jurídico",
      type: "PDF",
      date: "01 Out 2025",
      size: "1.8 MB",
    },
    {
      id: 7,
      name: "Dados Financeiros Q3",
      category: "Finanças",
      type: "XLSX",
      date: "28 Set 2025",
      size: "645 KB",
    },
    {
      id: 8,
      name: "Política de Privacidade",
      category: "Jurídico",
      type: "PDF",
      date: "25 Set 2025",
      size: "892 KB",
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-5 h-5 text-red-500" />;
      case "XLSX":
        return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
      case "DOCX":
        return <FileText className="w-5 h-5 text-blue-500" />;
      case "PPTX":
        return <FileImage className="w-5 h-5 text-orange-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "PDF":
        return "bg-red-100 text-red-700";
      case "XLSX":
        return "bg-green-100 text-green-700";
      case "DOCX":
        return "bg-blue-100 text-blue-700";
      case "PPTX":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || doc.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleDownload = (docName: string) => {
    alert(`Download iniciado: ${docName}`);
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="relative h-[300px] md:h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzYxODc4NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Documentos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A2E61]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Documentos e Downloads
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
              Acesse documentos importantes e faça downloads
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-[#6B7280]">Tipo:</span>
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Tipo de arquivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="PDF">PDF</SelectItem>
                  <SelectItem value="XLSX">Excel</SelectItem>
                  <SelectItem value="DOCX">Word</SelectItem>
                  <SelectItem value="PPTX">PowerPoint</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Table */}
      <section className="py-16 md:py-24 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDocuments.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center shadow-md">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-[#6B7280]">Nenhum documento encontrado.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#F8F9FC]">
                      <TableHead className="w-[50px]"></TableHead>
                      <TableHead>Nome do Arquivo</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Tamanho</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDocuments.map((doc) => (
                      <TableRow
                        key={doc.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <TableCell>{getFileIcon(doc.type)}</TableCell>
                        <TableCell>
                          <span className="text-[#0A2E61]">{doc.name}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-[#6B7280]">{doc.category}</span>
                        </TableCell>
                        <TableCell>
                          <Badge className={getTypeBadgeColor(doc.type)}>
                            {doc.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-[#6B7280]">{doc.date}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-[#6B7280]">{doc.size}</span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            onClick={() => handleDownload(doc.name)}
                            size="sm"
                            className="bg-gradient-to-r from-[#00B8D9] to-[#0A2E61] hover:opacity-90"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Baixar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {/* Summary */}
          {filteredDocuments.length > 0 && (
            <div className="mt-6 text-center text-[#6B7280]">
              Mostrando {filteredDocuments.length} documento
              {filteredDocuments.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
