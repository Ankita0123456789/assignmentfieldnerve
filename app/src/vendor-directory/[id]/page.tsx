import VendorDetailView from "@/app/modules/vendorOS/views/VendorDetail";

interface VendorDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function VendorDetailPage({ params }: VendorDetailPageProps) {
  const { id } = await params;
  return <VendorDetailView vendorId={id} />;
}
