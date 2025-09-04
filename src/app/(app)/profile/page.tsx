import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Archive,
  Bell,
  FileText,
  HelpCircle,
  Languages,
  LogOut,
  MapPin,
  Mail,
  Shield,
  ChevronRight,
} from 'lucide-react';

const profileMenuItems = [
  { icon: MapPin, text: 'My Address', href: '#' },
  { icon: Archive, text: 'Order History', href: '#' },
  { icon: Languages, text: 'Language', href: '#' },
  { icon: Bell, text: 'Notifications', href: '#' },
];

const supportMenuItems = [
  { icon: Mail, text: 'Contact Us', href: '#' },
  { icon: HelpCircle, text: 'Get Help', href: '#' },
];

const legalMenuItems = [
  { icon: Shield, text: 'Privacy Policy', href: '#' },
  { icon: FileText, text: 'Terms & Conditions', href: '#' },
];

const MenuItem = ({ icon: Icon, text, href }: { icon: React.ElementType, text: string, href: string }) => (
  <Link href={href} className="flex items-center p-3 -mx-3 rounded-lg hover:bg-secondary transition-colors">
    <Icon className="mr-4 h-5 w-5 text-primary" />
    <span className="flex-grow text-foreground">{text}</span>
    <ChevronRight className="h-5 w-5 text-muted-foreground" />
  </Link>
);

export default function ProfilePage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <Card>
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-24 w-24 border-4 border-background shadow-md">
            <AvatarImage src="https://i.pravatar.cc/150?u=jessica-alba" />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-2xl font-bold">Jessica Alba</CardTitle>
          <p className="text-muted-foreground">jessica.a@example.com</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            {profileMenuItems.map(item => <MenuItem key={item.text} {...item} />)}
          </div>
          <Separator />
          <div>
            {supportMenuItems.map(item => <MenuItem key={item.text} {...item} />)}
          </div>
          <Separator />
          <div>
            {legalMenuItems.map(item => <MenuItem key={item.text} {...item} />)}
          </div>
          <Separator />
          <Button variant="ghost" className="w-full justify-start p-3 -mx-3 text-destructive hover:text-destructive" asChild>
            <Link href="/login">
              <LogOut className="mr-4 h-5 w-5" />
              Log Out
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
