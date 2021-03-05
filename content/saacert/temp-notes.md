# EC2 101
- Elastic Compute Cloud - provides resizable compute capacity in the cloud
- Allows you scale capacity up and down easily
- Different pricing models:
    - On Demand (fixed rate by the second or hour)
    - Reserved (reserved capacity with discount on the hourly rate. 1 or 3 year terms)
    - Spot (any capacity which isn't being used, AWS will allow you to bid for it at a cheaper cost than the standard hourly rate)
    - Dedicated Hosts (Physical EC2 server, dedicated to you. They are useful when software licensing is bound to hardware)

## On Demand use cases
- Low cost and flexibility (no up-front payments)
- Applications with short term, spiky or unpredictable workloads _that cannot be interrupted_
- Applications that are being developed or tested on EC2 for the first time

## Reserved use cases
- Steady, predictable usage
- Up-front payment comes with discounts, reducing overall costs further
- 2 types:
    - **Standard Reserved Instances:** Up to 75% off on demand instances
    - **Convertible Reserved Instances:** Up to 54% off on demand, plus the ability to change the RI attributes (as long the change is of equal or greater value)
    - **Scheduled Reserved Instances:** Available to launch RI within the time window (good for predictable reoccuring traffic)

## Spot Instances use cases
- Applications which have flexible start and end times
- Urgent computing needs for large amounts of additional capacity

## Dedicated Host use cases
- Cases where regulatory requirements mean you can't run multi-tenant virtualisation
- Licensing models which are tied to hardware
- Can be purchased On-Demond (hourly) or as Reserved Instances (up to 70% off the on demand price)

## Instance Types and their use case
![image](https://sgitario.github.io/images/aws-ec2-instance-types.png)


---------------------
# Security Groups (DEMO)
- Like a virtual firewall, controlling traffic egress/ingress for a network interface
- Rule changes/security group assignment take place immediately
- The rules are **stateful**, meaning if you create an inbound rule, it'll automatically allow the same traffic back out
- The default rule is to block, so you don't need to "block" traffic, only allow what you need
- The above means you can't block a specific IP using a security group. For this, you need to use a NACL (Network Access Control List)
- Adding multiple security groups to an interface will combine the rules together

---------------------
# EBS 101
- Elastic Block Store. Persistent block storage which is automatically replicated **within its AZ**, offering high availability and durability
- You are able to encrypt the root device using KMS
- 5 types:
    - General Purpose (SSD)
    - Provisioned IOPS (SSD)
    - Throughput Optimised Hard Disk Drive (Magnetic)
    - Cold Hard Disk Drive (Magnetic)
    - Magnetic

## Use Cases
|Volume Type|Use Cases|API Name|Volume Size|Max IOPS/Volume|
|---|---|---|---|---|
|General Purpose SSD|Most work loads|gp2|1GiB - 16TiB|16,000|
|Provisioned IOPS SSD|Databases|io1|4GiB - 16TiB|64,000|
|Throughput Optimised HDD|Big Data and Data Warehouse|st1|500GiB - 16TiB|500|
|Cold HDD|File servers|sc1|500GiB - 16TiB|250|
|EBS Magnetic|Infrequent access|Standard|1GiB - 1TiB|40-200|

**Hint:** Become familiar with the API names here

## EBS/Snapshots/AMIs

- You can only attach EBS volumes to an instance in the same AZ. 
- To move a volume to a new AZ, you take a snapshot and create a new volume in the AZ you want - using the snapshot as a source
- Snapshots exist on S3 and are point in time copies
- Snapshots are incremental (only changes from last snapshots are saved)
- You can create AMIs from snapshots.
- You can copy AMIs from one region to another
- When you terminate an instance, the EBS volume isn't necessarily deleted with it. It depends on the policy setup when the instance was created
- You can change the size of the volume on the fly but it could effect performance and take some time to complete the operation
- When you increase the size of the volume, you will need to extend it at the OS level too before it'll see that extra space
- You can change the _type_ of the volume on the fly as well - but like re-sizing, it'll effect performance until the operation completes



---------------------
