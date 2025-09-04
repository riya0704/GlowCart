import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Bell,
  ChevronRight,
  Contact,
  FileText,
  HelpCircle,
  Languages,
  LogOut,
  MapPin,
  MoreHorizontal,
  Pencil,
  History,
  Shield,
  Cog,
} from 'lucide-react';

const accountMenuItems = [
  {
    icon: MapPin,
    text: 'Address',
    description: 'Manage your saved address',
    href: '#',
  },
  {
    icon: History,
    text: 'Order History',
    description: 'View your past orders',
    href: '#',
  },
  { icon: Languages, text: 'Language', description: 'English', href: '#' },
  {
    icon: Bell,
    text: 'Notifications',
    description: 'Manage your notifications',
    href: '#',
  },
];

const supportMenuItems = [
  { icon: Contact, text: 'Contact Us', href: '#' },
  { icon: HelpCircle, text: 'Get Help', href: '#' },
  { icon: Shield, text: 'Privacy Policy', href: '#' },
  { icon: Cog, text: 'Terms and Conditions', href: '#' },
];

const MenuItem = ({
  icon: Icon,
  text,
  description,
  href,
}: {
  icon: React.ElementType;
  text: string;
  description?: string;
  href: string;
}) => (
  <Link
    href={href}
    className="flex items-center p-4 transition-colors hover:bg-secondary"
  >
    <Icon className="mr-4 h-6 w-6 text-muted-foreground" />
    <div className="flex-grow">
      <p className="text-foreground">{text}</p>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
    <ChevronRight className="h-5 w-5 text-muted-foreground" />
  </Link>
);

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-secondary px-4 pb-24">
      <div className="container mx-auto max-w-2xl">
        <div className="flex items-center justify-between py-6">
          <h1 className="text-3xl font-bold">Profile</h1>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </div>

        <Card className="mb-4 overflow-hidden rounded-2xl">
          <CardContent className="flex items-center p-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://i.pravatar.cc/150?u=olivia" />
              <AvatarFallback>O</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex-grow">
              <p className="text-lg font-semibold">Olivia</p>
              <p className="text-muted-foreground">Oliva@gmail.com</p>
            </div>
            <Button variant="ghost" size="icon">
              <Pencil className="h-6 w-6" />
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-4 overflow-hidden rounded-2xl">
          <div className="divide-y divide-border">
            {accountMenuItems.map((item) => (
              <MenuItem key={item.text} {...item} />
            ))}
          </div>
        </Card>

        <Card className="mb-4 overflow-hidden rounded-2xl">
          <div className="divide-y divide-border">
            {supportMenuItems.map((item) => (
              <MenuItem key={item.text} {...item} />
            ))}
          </div>
        </Card>

        <Card className="overflow-hidden rounded-2xl">
          <Link href="/login" className="flex items-center p-4 text-destructive transition-colors hover:bg-destructive/10">
            <LogOut className="mr-4 h-6 w-6" />
            <span className="font-medium">Log Out</span>
          </Link>
        </Card>
      </div>
    </div>
  );
}
