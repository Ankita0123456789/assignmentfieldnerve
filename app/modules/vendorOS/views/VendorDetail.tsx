import VendorDetail from "../components/vendor-directory/VendorDetail";

interface VendorDetailViewProps {
  vendorId: string;
}

const VendorDetailView = ({ vendorId }: VendorDetailViewProps) => {
  return <VendorDetail vendorId={vendorId} />;
};

export default VendorDetailView;
