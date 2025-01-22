// Import your services data
import { services } from '@/utils/localDb';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { CircleCheckBigIcon } from 'lucide-react';

// Generate static paths for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: encodeURIComponent(service.title), // Encode the title as serviceId
  }));
}

// The `params` prop is provided by Next.js when rendering the page
export default function ServiceDescription({ params }) {
  const { serviceId } = params; // Extract serviceId from params
  const id = decodeURIComponent(serviceId); // Decode here
  const service = services.find(
    (service) => service.title.toLowerCase() === id.toLowerCase()
  );

  if (!service) {
    return <div>Service Not Found</div>; // Or a more elaborate error message
  }

  return (
    <div className="container-fluid pt-6 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">Our Services</h2>

      <Card
        key={service.title}
        className="w-full sm:w-[90%] my-4 gap-5 transition-transform mx-auto"
      >
        {/* Card Header */}
        <CardHeader className="flex flex-col items-center text-center">
          <service.icon className="h-10 w-10 mb-2 text-muted-foreground" />
          <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
        </CardHeader>

        {/* Card Content */}
        <CardContent className="text-lg text-muted-foreground text-center">
          {service.description}
        </CardContent>

        {/* Card Footer */}
        <CardFooter className="flex flex-col items-center gap-3">
          {service?.subServices?.map((sub) => (
            <div key={sub?.name} className="flex gap-1 items-center">
              <div>
                <CircleCheckBigIcon className="text-yellow-600" />
              </div>
              <div className="flex gap-1 items-start text-start justify-start">
                <span className="text-sm font-semibold">{sub?.name}:</span>
                <span className="text-sm text-muted-foreground">
                  {sub?.description}
                </span>
              </div>
            </div>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
